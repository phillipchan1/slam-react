export default class SlotService {
	static slots = [
		{
			slamId: 1,
			name: 'Slot name 1',
			imageUrl: 'https://source.unsplash.com/random/',
			id: 1
		},
		{
			slamId: 1,
			name: 'Slot name 2',
			imageUrl: 'https://source.unsplash.com/random/',
			id: 2
		},
		{
			slamId: 2,
			name: 'Slot name 1',
			imageUrl: 'https://source.unsplash.com/random/',
			id: 3
		},
		{
			slamId: 2,
			name: 'Slot name 2',
			imageUrl: 'https://source.unsplash.com/random/',
			id: 4
		},
		{
			slamId: 3,
			name: 'Slot name 1',
			imageUrl: 'https://source.unsplash.com/random/',
			id: 5
		}
	];

	static getSlot(id) {
		return this.slots.find(slot => {
			return slot.id == id;
		});
	}
}
