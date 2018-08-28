import SlotService from '../SlotService/SlotService';
import SubmissionService from '../SubmissionService/SubmissionService';

class UserService {
	static users = [
		{
			description:
				'Pellentesque a mi vel tellus venenatis accumsan. Aliquam ultrices magna bibendum enim sagittis, eget commodo turpis suscipit. Maecenas ut ex mattis, accumsan nibh quis, congue turpis. Fusce eu tellus ac erat sagittis aliquet. Sed euismod justo et consequat tempus.',
			id: 1,
			name: 'Phil',
			email: 'phillipchan1@gmail.com',
			imageUrl: 'https://api.adorable.io/avatars/241/abott@adorable.png'
		},
		{
			description:
				'Pellentesque a mi vel tellus venenatis accumsan. Aliquam ultrices magna bibendum enim sagittis, eget commodo turpis suscipit. Maecenas ut ex mattis, accumsan nibh quis, congue turpis. Fusce eu tellus ac erat sagittis aliquet. Sed euismod justo et consequat tempus.',
			id: 2,
			name: 'Bob Marley',
			email: 'phillipchan1@gmail.com',
			imageUrl: 'https://api.adorable.io/avatars/241/abott@adorable.png'
		},
		{
			description:
				'Pellentesque a mi vel tellus venenatis accumsan. Aliquam ultrices magna bibendum enim sagittis, eget commodo turpis suscipit. Maecenas ut ex mattis, accumsan nibh quis, congue turpis. Fusce eu tellus ac erat sagittis aliquet. Sed euismod justo et consequat tempus.',
			id: 3,
			name: 'Bob Joe',
			email: 'phillipchan1@gmail.com',
			imageUrl: 'https://api.adorable.io/avatars/241/abott@adorable.png'
		},
		{
			description:
				'Pellentesque a mi vel tellus venenatis accumsan. Aliquam ultrices magna bibendum enim sagittis, eget commodo turpis suscipit. Maecenas ut ex mattis, accumsan nibh quis, congue turpis. Fusce eu tellus ac erat sagittis aliquet. Sed euismod justo et consequat tempus.',
			id: 4,
			name: 'Richard',
			email: 'phillipchan1@gmail.com',
			imageUrl: 'https://api.adorable.io/avatars/241/abott@adorable.png'
		}
	];

	static updateUser(newProperties, cb) {
		console.log('newProperties', newProperties);
		this.fakeUser = Object.assign(this.fakeUser, newProperties);

		cb(this.fakeUser);
	}

	static getUser(id) {
		return this.users.find(user => {
			return user.id == id;
		});
	}

	static getUsersAndProgressBySlotId(slotId) {
		var slot = SlotService.getSlot(slotId);
		var slots = SlotService.getSlotsBySlamId(slot.slamId);
		var slotsInSlam = slots.length;

		var submissions = SubmissionService.getSubmissions().filter(
			submission => {
				return submission.slotId === slotId;
			}
		);

		var usersAndProgress = submissions.map(submission => {
			return {
				user: this.getUser(submission.userId),
				slotsSubmitted: 1
			};
		});

		console.log(usersAndProgress);

		return {
			slotsInSlam: slotsInSlam,
			usersAndProgress: usersAndProgress
		};
	}
}

export default UserService;
