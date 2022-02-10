import { modify, Automizer } from "pptx-automizer";

const automizer = new Automizer({
    templateDir: `templates`,
    outputDir: `output`,
});

async function main() {
    const presentation = await automizer.load("Test.pptx", "Test").presentation();
    const { files } = await presentation.templates[0].archive;
    const media = Object.entries(files)
        .map(([key, value]) => {
            if (key.includes("media")) return value;
        })
        .filter(x => x);
    console.log(media);
}

main().catch(err => console.error(err));
