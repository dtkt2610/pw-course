import { test, expect } from '@playwright/test';

test.describe("Login API suites", () => {

    test('Login success', async ({ request }) => {
        await test.step("Verify đăng nhập thành công bằng account admin", async () => {
            const response = await request.post('https://material.playwrightvn.com/api/user-management/v1/login.php', {
                data: {
                    "email": "admin@example.com",
                    "password": "password"
                },
            });
            const statusCode = response.status();
            expect(statusCode).toBe(200);
            const responseJSON = await response.json();
            expect(responseJSON.success).toBe(true);
            expect(responseJSON.data.token).toBeTruthy();
            //console.log(responseJSON);
        });

        await test.step("Verify đăng nhập thành công bằng account user", async () => {
            const response = await request.post('https://material.playwrightvn.com/api/user-management/v1/login.php', {
                data: {
                    "email": "thoadinh@example.com",
                    "password": "123456"
                },
            });
            const statusCode = response.status();
            expect(statusCode).toBe(200);
            const responseJSON = await response.json();
            expect(responseJSON.success).toBe(true);
            expect(responseJSON.data.token).toBeTruthy();
            //console.log(responseJSON);
        });
    });
});

test.describe("Create user API suites", () => {
    let token: string;
    let userId: number;

    test.beforeEach(async ({ request }) => {
        const response = await request.post(
            'https://material.playwrightvn.com/api/user-management/v1/login.php',
            {
                data: {
                    email: 'admin@example.com',
                    password: 'password'
                }
            }
        );

        const responseJson = await response.json();
        token = responseJson.data.token;
    });

    test('Create user success', async ({ request }) => {

        const email = `thoadinh2@example.com`;

        await test.step('Step 1: Create user', async () => {

            const response = await request.post(
                'https://material.playwrightvn.com/api/user-management/v1/users.php',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    data: {
                        name: 'Thoa K23 - 2',
                        email,
                        password: '123456',
                        role: 'user'
                    }
                }
            );

            const responseJson = await response.json();

            expect(responseJson.success).toBe(true);

            const createdUser = responseJson.user ?? responseJson.users;

            expect(createdUser.email).toBe(email);

            userId = createdUser.id;
        });

        await test.step('Step 2: Verify user in list', async () => {

            const response = await request.get(
                'https://material.playwrightvn.com/api/user-management/v1/users.php',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const responseJson = await response.json();

            const createdUser = responseJson.users.find(
                (u: any) => u.id === userId
            );

            expect(createdUser).toBeTruthy();
            expect(createdUser.email).toBe(email);
        });

    });


    test.afterEach(async ({ request }) => {
        if (userId) {
            await request.delete(
                `https://material.playwrightvn.com/api/user-management/v1/users.php`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    data: {
                        id: userId,
                    }
                }
            );
        }
    });
});