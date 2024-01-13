import { test, expect } from '@playwright/test';

test.describe.parallel('Parallel test', async () => {
    test('1.Go GET request and check 200', async ({ request }) => {
        const link = 'https://reqres.in/api'
        const issues = await request.get(`${link}/users/2`)
        expect(issues.status()).toBe(200);

        const responseBody = JSON.parse(await issues.text())
        console.log(responseBody)
    })
    test('2.Simple GET request and check 404error', async ({ request }) => {
        const link = 'https://reqres.in/api'
        const issues = await request.get(`${link}/users/somethinglinkNotCorrect`)
        expect(issues.status()).toBe(404);
    })

    test('3.Go GET assert data', async ({ request }) => {
        const link = 'https://reqres.in/api'
        const issues = await request.get(`${link}/users/2`)
        const responseBody = JSON.parse(await issues.text())
        console.log(responseBody)

        expect(responseBody.data.id).toBe(2)
        expect(responseBody.data.email).toBe('janet.weaver@reqres.in')
        expect(responseBody.data.first_name).toBe('Janet')
        expect(responseBody.data.last_name).toBe('Weaver')
        expect(responseBody.data.avatar).toBe('https://reqres.in/img/faces/2-image.jpg')
        expect(responseBody.support.url).toBe('https://reqres.in/#support-heading')
        expect(responseBody.support.text).toBe('To keep ReqRes free, contributions towards server costs are appreciated!')

    })
    test('4.Go POST request for login ', async ({ request }) => {
        const link = 'https://reqres.in/'
        const issues = await request.post(`${link}api/login`, {
            data: {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
        })
        const responseBody = JSON.parse(await issues.text())

        expect(issues.status()).toBe(200)
        expect(responseBody.token).toBeTruthy()
        console.log(responseBody.token)
        expect(responseBody.token).toBe("QpwL5tke4Pnpja7X4")
    })

    test('5.Will be Truthy POST new id for created user', async ({ request }) => {
        const link = 'https://reqres.in/api'
        const Postbody = await request.post(`${link}/users`, {
            data: {
                id: 1000
            }
        })
        const responseBody = JSON.parse(await Postbody.text())

        expect(Postbody.status()).toBe(201)
        expect(responseBody.createdAt).toBeTruthy()
        console.log(responseBody)
    })

    test('6.PUT request Update - User', async ({ request }) => {
        const link = 'https://reqres.in/api'
        const issues = await request.put(`${link}/users/2`, {
            data: {
                name: 'new name',
                job: 'new job',
            },
        })
        const responseBody = JSON.parse(await issues.text())
        expect(issues.status()).toBe(200);
        expect(issues.ok()).toBeTruthy();
        expect(responseBody.name).toBe('new name')
        expect(responseBody.job).toBe('new job')
        expect(responseBody.updatedAt).toBeTruthy()
        console.log(responseBody)
    })
    test('7.PATCH request - Update user', async ({ request }) => {
        const link = 'https://reqres.in/api'
        const issues = await request.patch(`${link}/users/2`, {
            data: {
                "name": "NewPatchedname",
                "job": "NewPATCHedJob",
            }
        })
        const responseBody = JSON.parse(await issues.text())

        expect(issues.status()).toBe(200);
        expect(issues.ok()).toBeTruthy();
        expect(responseBody.name).toBe("NewPatchedname")
        expect(responseBody.job).toBe("NewPATCHedJob")
        expect(responseBody.updatedAt).toBeTruthy()
        console.log(responseBody)
    })

    test("8.DELETE request - Delete user", async ({ request }) => {
        const link = 'https://reqres.in/api'
        const response = await request.delete(`${link}/users/2`)
        expect(response.status()).toBe(204)
    })
})