import type { PageServerLoad } from './$types';
import { isRedirect, redirect } from '@sveltejs/kit';
import axios from 'axios';

export const actions = {
    postDetails: async ({ request }: { request: Request }) => {
        try {
            const formData = await request.formData();

            let data: { email: FormDataEntryValue | null, time: string, message: FormDataEntryValue | null, image: File | null };

            if (formData.get("randomTime") != "null") {
                let randomTime = new Date(Date.now() + Math.floor(Math.random() * 1000 * 60 * 60 * 24)).toISOString();

                data = {
                    email: formData.get("email"),
                    time: randomTime,
                    message: formData.get("message"),
                    image: formData.get("image") as File | null
                }
            } else {
                data = {
                    email: formData.get("email"),
                    time: formData.get("time") as string || "",
                    message: formData.get("message"),
                    image: formData.get("image") as File | null
                }
            }

            // Log the data being sent for debugging
            console.log('Data being sent to API:', data);

            // Define the URL and form data
            const url = 'http://localhost:8000/api/upload';


            // Function to upload the photo
            const uploadPhoto = async () => {
                const formData = new FormData();
                if (data.image) {
                    formData.append('file', data.image);
                }


                try {
                    const response = await axios.post(url, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        timeout: 10000, // Increase timeout to 10 seconds
                    });
                    console.log(response.data);
                } catch (error) {
                    console.error('Error uploading photo:', error);
                }
            };

            // Call the function to upload the photo
            await uploadPhoto();

            // sendEmail(data.email as string, "Time Capsule Reminder", "Your time capsule will become publicly accessible at " + data.time + ".");

            // Redirect to the launch page
            throw redirect(302, "/launch");
        } catch (err) {
            console.error('Error in postDetails action:', err);
            if (isRedirect(err)) {
                throw redirect(err.status, err.location);
            } else {
                throw redirect(500, "/error");
            }
        }
    }
}

// function sendEmail(recipient: string, subject: string, message: string) {
//     resend.emails.send({
//         from: "donotreply@pathway404.com",
//         to: recipient,
//         subject: subject,
//         html: message,
//     });
// }
