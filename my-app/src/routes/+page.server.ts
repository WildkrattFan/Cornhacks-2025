import type { PageServerLoad } from './$types';
import { isRedirect, redirect } from '@sveltejs/kit';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    //Posts the details to the postAPI
    postDetails: async ({ request }) => {

        try {
            console.log("entering the posting");
            const formData = await request.formData();

            let data = {

            }

            if (formData.get("randomTime") === "true") {
                let randomTime = new Date(Date.now() + Math.floor(Math.random() * 1000 * 60 * 60 * 24)).toISOString();

                data = {
                    email: formData.get("email"),
                    time: randomTime,
                    message: formData.get("message"),
                    image: formData.get("image")
                }
            } else {
                data = {
                    email: formData.get("email"),
                    time: formData.get("time"),
                    message: formData.get("message"),
                    image: formData.get("image")
                }
            }
            console.log(data);

            //posts the data to the postAPI

            // const response = await fetch("http://localhost:3000/api/posts", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(data)
            // });

            throw redirect(302,"/launch");
        } catch (err) {
            if(isRedirect(err)){
                throw redirect(err.status,err.location);
            }
        }
    }
}



