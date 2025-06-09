const baseUrl = "http://localhost:3000";

export const apiClient = {

    async post(endpoint, data) {
        const res = await fetch(`${baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(await res.text());
        return res.json();
    },

    async get(endpoint) {
        const res = await fetch(`${baseUrl}${endpoint}`);
        if (!res.ok) throw new Error(await res.text());
        return res.json();
    },

};