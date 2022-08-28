const discordServer = {
    name: 'Proyek III',
    roles: ['Front-End', 'Back-End', 'System Analyst', 'Tester', 'Database Administrator'],
    getRolesList() {
        console.log('Available roles on ' + this.name + ' Discord server \n');
        this.roles.forEach((roles) => {
            console.log(roles + ' role are available at ' + this.name)
        })
    }
}

discordServer.getRolesList();