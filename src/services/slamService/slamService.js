class SlamService {
    static slams = [
        {
            name: 'slam name',
            description: 'description',
            id: 1
        },
        {
            name: 'slam name 2',
            description: 'description',
            id: 2
        },
        {
            name: 'slam name 3',
            description: 'description',
            id: 3
        }
    ];

    static getSlams() {
        return this.slams;
    }

    static getSlam(id) {
        return this.slams.find(slam => {
            return slam.id === id;
        })
    }
}

export default SlamService;