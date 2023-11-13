const postsPath = require("../db/db.js");

function index(req, res) {

    res.format({

        html: () => {

            // title
            const html = ["<h1>Posts</h1>"];

            // posts list
            html.push("<ul>");
            postsPath.forEach(post => {
                html.push(
                    `<li>

                <h3>${post.title}</h3>

                <img src="/imgs/posts/${post.image}" alt="" style="width: 150px; height: 150px">

                <p>${post.content}</p>

                    </li>`);

                // tags
                html.push("<span>");

                post.tags.forEach(tag => {
                    html.push(`${tag}<br>`);
                });

                html.push("</span>");

            });

            html.push("</ul>");

            res.send(html.join(""));
        },
        json: () => {
            res.type("json").send({
                totalElements: postsPath.length,
                list: postsPath
            });
        },
        default: () => {
            res.status(406).send("Not Acceptable");
        },
    })

}


module.exports = {
    index

}