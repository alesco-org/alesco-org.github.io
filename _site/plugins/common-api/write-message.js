
$(document).ready(function() {

    $("#inputSubject").change(function() {
        var subject = $(this).val();

        if (subject == "Lavorare in Asilo") {
            $("#alertWorkWithUs").show("fast");
        } else {
            $("#alertWorkWithUs").hide();
        }
    });

    $("#inputSendMessageBtn").click(function() {

        var name = trim($("#inputName").val());
        var email = trim($("#inputEmail").val());
        var phone = trim($("#inputPhone").val());
        var subject = trim($("#inputSubject").val());
        var message = trim($("#inputMessage").val());



        if (!name || name.length < 2) {
            error("Inserisci il tuo nome per poter procedere");
            return;
        }

        if (!email || email.length < 3) {
            error("Inserisci un indirizzo email dove poter essere ricontattato");
            return;
        }

        if (!validateEmail(email)) {
            error("L'indirizzo email '" + email + "' non è valido. Per favore, controlla i dati inseriti");
            return;
        }

        if (phone && !validatePhone(phone)) {
            error("Il numero di telefono '" + phone + "' non è valido. Per favore, controlla i dati inseriti");
            return;
        }

        if (!subject) {
            error("Seleziona il motivo per cui ci stai contattando");
            return;
        }

        if (!message || message.length < 5) {
            error("Inserisci il tuo messaggio");
            return;
        }

        error();

        $.post("https://alesco.nerdammer.it/message", {
            "Message-Name": name,
            "Message-Mail": email,
            "Message-Phone": phone,
            "Message-Subject": subject,
            "Message-Text": message
        }, function () {
            if (subject == 'Iscrizione Asilo Nido') {
                $(location).attr("href", "/contatti-conferma-iscrizione/");
            } else {
                $(location).attr("href", "/contatti-conferma/");
            }
        }).fail(function () {
            error("Si è verificato un errore durante l'invio del messaggio. <br /><br />Per favore, invia la tua richiesta via mail a: <a href=\"info@ibambinidelcircomassimo.it\">info@ibambinidelcircomassimo.it</a>.<br/><br/>Ci scusiamo per l'inconveniente.");
        });


        function error(text) {
            var errorContainer = $("#formErrorContainer");
            errorContainer.empty();
            if (text) {
                var error = $("<div/>").addClass("alert").addClass("alert-danger").attr("role", "alert");
                error.html(text);
                error.appendTo(errorContainer);
            }
        }

        function validateEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        function validatePhone(phone) {
            var re = /^[+]{0,1}[0-9 ]{5,25}$/;
            return re.test(phone);
        }

        function trim(text) {
            if (text) {
                return text.trim();
            }
            return text;
        }


    });
});