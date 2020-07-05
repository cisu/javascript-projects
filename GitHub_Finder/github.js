class Github {
    constructor() {
        this.client_id = '34623771cd4cddaef14f';
        this.client_secret = '1ebc6910c37140e027a6183f560e458813be9a30';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            // profile: profile
            profile,
            // repos: repos
            repos
        }
    }
}