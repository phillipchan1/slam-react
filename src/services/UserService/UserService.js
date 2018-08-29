import SlotService from '../SlotService/SlotService';
import SubmissionService from '../SubmissionService/SubmissionService';
import ArrayUtils from '../../utils/ArrayUtils';

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
		},
		{
			description:
				'Pellentesque a mi vel tellus venenatis accumsan. Aliquam ultrices magna bibendum enim sagittis, eget commodo turpis suscipit. Maecenas ut ex mattis, accumsan nibh quis, congue turpis. Fusce eu tellus ac erat sagittis aliquet. Sed euismod justo et consequat tempus.',
			id: 5,
			name: 'Chris Hemsworth',
			email: 'chris@gmail.com',
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

	static getUsersInSlam(slamId) {
		var slots = SlotService.getSlotsBySlamId(slamId);
		var allSubmissions = [];

		slots.forEach((slot, index) => {
			let submissions = SubmissionService.getSubmissionsBySlotId(slot.id);

			allSubmissions.push(submissions);
		});

		allSubmissions = allSubmissions.reduce(
			(acc, val) => acc.concat(val),
			[]
		);

		var users = allSubmissions.map(submission => {
			return submission.userId;
		});

		return users;
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

		var allUsersInSlam = this.getUsersInSlam(slot.slamId);

		var usersAndProgress = submissions.map(submission => {
			return {
				user: this.getUser(submission.userId),
				slotsSubmitted: ArrayUtils.countInArray(
					allUsersInSlam,
					submission.userId
				)
			};
		});

		return {
			slotsInSlam: slotsInSlam,
			usersAndProgress: usersAndProgress
		};
	}
}

export default UserService;
