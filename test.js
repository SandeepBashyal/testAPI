const {selector, Selector} = require("testcafe");

fixture("Simple Test").page("https://example.com");

test("Check page title and heading", async t=>{
    await t.expect(Selector('h1').innerText).eql("Example Domain");
    await t.expect(t.eval(()=> document.location.href)).contains('example.com')
})