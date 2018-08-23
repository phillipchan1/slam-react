export default class SubmissionService {
	static submissions = [
		{
			name: 'submission name 1',
			pictureUrl: 'http://placehold.it/200x200',
			description:
				'Phasellus quis est mollis, ullamcorper leo quis, tempor turpis. Cras sed nisi quis dui fringilla maximus quis ac nulla.',
			id: 1,
			slamId: 4,
			type: 'submission'
		},
		{
			name: 'submission name 1',
			pictureUrl: 'http://placehold.it/200x200',
			description:
				'Phasellus quis est mollis, ullamcorper leo quis, tempor turpis. Cras sed nisi quis dui fringilla maximus quis ac nulla.',
			id: 2,
			slamId: 4,
			type: 'submission'
		},
		{
			name: 'submission name 1',
			pictureUrl: 'http://placehold.it/200x200',
			description:
				'Phasellus quis est mollis, ullamcorper leo quis, tempor turpis. Cras sed nisi quis dui fringilla maximus quis ac nulla.',
			id: 3,
			slamId: 4,
			type: 'submission'
		},
		{
			name: 'submission name 1',
			pictureUrl: 'http://placehold.it/200x200',
			description:
				'Phasellus quis est mollis, ullamcorper leo quis, tempor turpis. Cras sed nisi quis dui fringilla maximus quis ac nulla.',
			id: 4,
			slamId: 4,
			type: 'submission'
		}
	];

	static getSubmissions() {
		return this.submissions;
	}
}
