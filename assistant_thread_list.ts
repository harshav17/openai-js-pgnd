import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
    const messages = await openai.beta.threads.messages.list(
        "thread_XmMzrbqNV5D1ZAL3VyDkhezc"
    );
    messages.data.forEach((message) => {
        console.log(message.content);
    });
}

main();