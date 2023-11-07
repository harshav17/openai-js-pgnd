import OpenAI from "openai";

const openai = new OpenAI();


/**
 * Previous Response:
 * [
  {
    revised_prompt: "Imagine an illustrative picture that encapsulates a scene from a story, set in a lively city in India. The city is teeming with people and vibrantly colored buildings, bustling markets and a jumble of unique street food stalls. In this dynamic cityscape, focus on a small girl named Lily. She's daydreaming, with her eyes reflecting the beauty of her imaginary world, contrary to the buzzing city around her. This girl, of South Asian descent, is depicted as outdoor amidst this commotion, completely engrossed in her dreams.",
    url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-kSZT8c04e5hpXRYrbMt8gC84/user-5tpSOZrDFwVZxjJ1rgz3fOVe/img-s3stFZTE1IH9Ni02N7s56avT.png?st=2023-11-07T04%3A47%3A40Z&se=2023-11-07T06%3A47%3A40Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-06T15%3A36%3A17Z&ske=2023-11-07T15%3A36%3A17Z&sks=b&skv=2021-08-06&sig=0FUSYbtme/TAaQT75lvw7O7DWHBSlw1f%2B6k6m8KF/lc%3D'
  }
]
 */
async function main() {
  const image = await openai.images.generate({ model: "dall-e-3", prompt: "Once upon a time in a bustling Indian city, there lived a little girl named Lily who loved to daydream and often found herself lost in her own world." });

  console.log(image.data);
}
main();