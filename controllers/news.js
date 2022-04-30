const db = require("../models");

const News = db.news
const createNews = async (req, res) => {
    console.log("creating news")

    try {
        News.create({
            title: req.body.title,
            newsText: req.body.newsText,
            isPinned: req.body.isPinned,
        })
        return res.status(200).json({
            message: "created"
        })
    } catch (error) {
        return res.send(`Error with creating news-  ${error}`);
    }

}

const loadNews = async (req, res) => {
    console.log("loading news")
    News.findAll({ limit: 10, order: [['updatedAt', 'DESC']]}).then(files => {
         files.sort((a,b) => b.isPinned - a.isPinned)
        res.json(files)
    })

}

module.exports = {
    createNews,
    loadNews,
}