import OpenAI from "openai";

const openai = new OpenAI();

const math_tutor_assistant_id = "asst_B8OC43C8lhBZrJfa0wBhGv5L";

async function main() {
    const thread = await openai.beta.threads.create({});
    const message = await openai.beta.threads.messages.create(
        thread.id,
        {
          role: "user",
          content: "I need to solve the equation `3x + 11 = 14`. Can you help me?"
        }
    );
    const run = await openai.beta.threads.runs.create(
        thread.id,
        { 
          assistant_id: math_tutor_assistant_id,
          instructions: "Please address the user as Jane Doe. The user has a premium account."
        }
    );
    console.log("message id" + message.id);
    console.log("run id" + run.id);
}

main();