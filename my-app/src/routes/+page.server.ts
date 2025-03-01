import type { PageServerLoad } from './$types';
import { isRedirect, redirect } from '@sveltejs/kit';


export const actions = {
    /**
     * postDetails to the postAPI and redirects to the launch page if successful
     * if not successful, redirects to the error page
     * 
     * @param request
     * @throws {redirect}
     * @returns {Promise<any>}
     */
    postDetails: async ({ request }: { request: Request }) => {

        try {
            const formData = await request.formData();

            let data = {

            }

            //checks if the time is random or not
            if (formData.get("randomTime") != "null") {
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

            //posts the data to the postAPI

            // const response = await fetch("http://localhost:3000/api/posts", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(data)
            // });

            //redirects to the launch page
            throw redirect(302,"/launch");
        } catch (err) {
            if(isRedirect(err)){
                throw redirect(err.status,err.location);
            }
            else{
                throw redirect(500,"/error");
            }
        }
    }
}



