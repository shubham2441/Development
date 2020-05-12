let puppeteer = require("puppeteer");
let fs = require("fs");

let cFile = process.argv[2];

let QuestionFile = process.argv[3];

let JavaCodes = require(QuestionFile);

(async function () {
    try {
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"]
        });

        let pages = await browser.pages();
        let page = pages[0];

        let data = await fs.promises.readFile(cFile);
        let { user, password, url } = JSON.parse(data);

        await page.goto(url, { waitUntil: "networkidle0" });

        await page.type("input[type=text]", user, { delay: 120 });
        await page.type("input[type=password]", password, { delay: 120 });
        await Promise.all([page.click("input[type=submit]"),
        page.waitForNavigation({ waitUntil: "networkidle0" })
        ]);

        await page.click(".Header-item.position-relative.mr-0.d-none.d-lg-flex .Header-link .dropdown-caret");

        let dropDownMenu = await page.$$(".Header-item.position-relative.mr-0.d-none.d-lg-flex a", { delay: 120 });

        await Promise.all([dropDownMenu[0].click(),
        page.waitForNavigation({ waitUntil: "networkidle0" })
        ]);

        let navBar = await page.$$(".UnderlineNav-body a");
        await Promise.all([navBar[1].click(),
        page.waitForNavigation({ waitUntil: "networkidle0" })
        ]);

        await page.waitForSelector(".text-center.btn.btn-primary.ml-3", { visible: true });

        await Promise.all([page.click(".text-center.btn.btn-primary.ml-3"),
        page.waitForNavigation({ waitUntil: "networkidle0" })
        ]);

        await page.waitForSelector(".form-control.js-repo-name.js-repo-name-auto-check.short", { visible: true });
        await page.type(".form-control.js-repo-name.js-repo-name-auto-check.short", "Data Structure and Algorithm", { delay: 120 });

        await page.type(".form-control.long", "This is Github Automation for Java Code Upload", { delay: 120 });

        await Promise.all([page.click(".btn.btn-primary.first-in-line"),
        page.waitForNavigation({ waitUntil: "networkidle0" })
        ]);

        await page.waitForSelector(".Box-header.Box-header--blue", { visible: true });
        let createNewFile = await page.$$(".Box-header.Box-header--blue .mb-0 a");
       

        let work = [];
        for (let i = 0; i < JavaCodes.length; i++) {
            let href = await page.evaluate(function (element) {
                return element.getAttribute("href")
            }, createNewFile[0]);


            let newPage = await browser.newPage();
            let workDone = await newFileHandle(newPage, i, href);
            work.push(workDone);
        }

        await Promise.all(work);

        await page.reload();
    } catch (err) {
        console.log(err);
    }
})();

async function newFileHandle(Page, idx, link) {
    await Page.goto("https://github.com" + link, { waitUntil: "networkidle0" });
    await Page.waitForSelector(".form-control.js-blob-filename.js-breadcrumb-nav.mr-1.mt-1.mt-sm-0.col-12.width-sm-auto", { visible: true });
    await Page.type(".form-control.js-blob-filename.js-breadcrumb-nav.mr-1.mt-1.mt-sm-0.col-12.width-sm-auto", JavaCodes[idx]["FileName"], { delay: 120 });
    //await newPage.executeScript("arguments[0].style.display='block'", ".form-control.file-editor-textarea.js-blob-contents.js-code-textarea");
    await Page.evaluate(function () {
        document.querySelector(".form-control.file-editor-textarea.js-blob-contents.js-code-textarea").style.display = 'block';
    });
    await Page.type(".commit-create .form-control.file-editor-textarea.js-blob-contents.js-code-textarea", JavaCodes[idx]["Code"]);
    await Page.click("#submit-file"),
    await Page.close();
}

