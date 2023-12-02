const koaRouter = require("koa-router");
const router = new koaRouter();

router.get("/", async function (context) {
    context.body = "Easy Sports API";
});

module.exports = router;