import { test, expect} from '@playwright/test'
import users from '../test-data/usersResponse.json'

test.describe("API Verification Examples", () =>{
    
    //1. GET Test to verify users endpoint returns expected users
    test("Verify multiple records returned against stored static response", async ({request}) => {
        //save raw response into a variable
        const response = await request.get('https://reqres.in/api/users?page=2')

        //parse the response body into a JS object w access to the actual data within the response body
        const responseBody = await response.json()
        
        // Lets see whats stored inside
        //console.log(responseBody)
        expect(response.status()).toBe(200);
        expect(responseBody).toEqual(users);
    })

    //2. GET Test data for a single use line by line 
    test("Verify single user line by line", async ({request})=>{
        const response = await request.get('https://reqres.in/api/users/2')
        const responseBody = await response.json()
        //console.log(responseBody)

        //Assert user's information
        expect(response.status()).toBe(200);
        expect(responseBody.data.id).toBe(2);
        expect(responseBody.data.email).toBe('janet.weaver@reqres.in');
    })

    //3. POST request
    test.only("Verify POST request", async ({request}) => {
        const newUser = {
            name: "Sam",
            job: "QA Engineer"
        }

        //Create request and save response
        const response = await request.post ("https://reqres.in/api/users", {
            data: newUser
        })
        const responseBody= await response.json()
        console.log(responseBody)

        //Verify reponse 201
        expect(response.status()).toBe(201)
        expect(responseBody.name).tpBe(newUser.name)
        expect(responseBody.job).toBe(newUser.job)
    })

    //4. PUT request
    test("Verify PUT request", async ({request}) => {
        const updateUser = {
            name: "Mr. Whiskers",
            job: "USA President"
        }
        //PUT req and save response
        const response = await request.put('https://reqres.in/api/users/1', {
            data:updateUser
        })
        const responseBody =await response.json()
        console.log(responseBody)

        //Verify the response
        expect(response.status()).toBe(200)
        expect(responseBody.name).toBe(updatedUser.name)
        expect(responseBody.job).toBe(updatedUser.job)
    })

    //5. Verify DELETE request 
    test("Verify User is Deleted", async ({request}) => {
        const response = await request.delete('https://reqres.in/api/users/1')
        console.log(response)
        expect(response.status()).toBe(204)
    })
})