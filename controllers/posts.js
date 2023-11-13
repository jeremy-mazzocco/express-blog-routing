const posts = require("../db/db.js");
const path = require("path");


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

function show(req, res) {

    const post = doesPostExist(req, res);

    res.json(post);

}

function create(req, res) {

    res.format({

        html: () => {

            const html = ["<h1>Creazione nuovo post</h1>"];

            res.send(html.join(""));
        },
        default: () => {
            res.status(406).send("Not Acceptable");
        },
    })

}

function download(req, res) {


    const post = doesPostExist(req, res);

    const encodedSlug = encodeURIComponent(post.slug);

    const imagePath = path.join(__dirname, '..', 'public', 'imgs', 'posts', post.image);

    res.download(imagePath, `${encodedSlug}`, (err) => {

        if (err) {
            res.status(500).send('Internal Server Error');
        }
    });

}




// other functions
function doesPostExist(req, res) {

    const postSlug = req.params.slug;

    const post = posts.find((post) => post.slug == postSlug);

    if (!post) {
        res.status(404).send(`Post non trovato`);
        return;
    }

    return post;
}


module.exports = {
    index,
    show,
    create,
    download
}