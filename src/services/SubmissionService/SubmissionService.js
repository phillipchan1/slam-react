export default class SubmissionService {
	static submissions = [
		{
			imageUrl: 'https://source.unsplash.com/random/250x250',
			featuredImage: 1,
			description:
				'Phasellus quis est mollis, ullamcorper leo quis, tempor turpis. Cras sed nisi quis dui fringilla maximus quis ac nulla.',
			id: 1,
			slotId: 1,
			userId: 1,
			dateCreated: new Date(),
			type: 'submission'
		},
		{
			imageUrl: 'https://source.unsplash.com/random/250x250',
			featuredImage: 1,
			description:
				'Phasellus quis est mollis, ullamcorper leo quis, tempor turpis. Cras sed nisi quis dui fringilla maximus quis ac nulla.',
			id: 2,
			slotId: 2,
			userId: 2,
			dateCreated: new Date(),
			type: 'submission'
		},
		{
			imageUrl: 'https://source.unsplash.com/random/250x250',
			featuredImage: 1,
			description:
				'Phasellus quis est mollis, ullamcorper leo quis, tempor turpis. Cras sed nisi quis dui fringilla maximus quis ac nulla.',
			id: 3,
			slotId: 3,
			userId: 3,
			dateCreated: new Date(),
			type: 'submission'
		},
		{
			imageUrl: 'https://source.unsplash.com/random/250x250',
			featuredImage: 1,
			description:
				'Phasellus quis est mollis, ullamcorper leo quis, tempor turpis. Cras sed nisi quis dui fringilla maximus quis ac nulla.',
			id: 4,
			slotId: 4,
			userId: 4,
			dateCreated: new Date(),
			type: 'submission'
		}
	];

	static getSubmission(id) {
		return this.submissions.find(submission => {
			return submission.id == id;
		});
	}

	static getSubmissions() {
		return this.submissions;
	}
}
