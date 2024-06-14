
/*
$(document).ready(function() {
    $.get("https://alesco.nerdammer.it/posts", function (res) {

        var row = $("<div/>").addClass("row");
        for (var i=0; i<res.length && i<6; i++) {
            if (i % 3 === 0) {
                if (i > 0) {
                    row.appendTo("#fb-posts");
                }
                row = $("<div/>").addClass("row");
            }

            var template = $("#fb-template")
                .clone()
                .css("display", "block")
                .attr("id", "fb-post-" + (i+1));

            $(".fb-message", template).text(res[i].message ? res[i].message : "Nuova immagine!");
            $(".fb-image", template).attr("src", res[i].picture);
            $(".fb-date", template).text(res[i].date.split("-")[2] + " / " + res[i].date.split("-")[1]);
            $(".fb-likes", template).text(res[i].likes);
            $(".fb-link", template).attr("href", res[i].link);
            $(".fb-color", template).addClass("color-" + ((i%4) + 1));
            $(".fb-border-color", template).addClass("border-color-" + ((i%4) + 1));
            $(".fb-bg-color", template).addClass("bg-color-" + ((i%4) + 1));

            row.append(template);
        }

        row.appendTo("#fb-posts");

    })
});
*/