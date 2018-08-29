export default class SlotService {
	static slots = [
		{
			slamId: 1,
			name: 'Slot name 1',
			description:
				'Praesent in enim tincidunt, convallis ex et, viverra orci. Morbi semper diam a lacinia imperdiet. Vivamus congue ex ut diam luctus, et facilisis metus luctus.',
			imageUrl: 'https://source.unsplash.com/random/',
			id: 1
		},
		{
			slamId: 1,
			name: 'Slot name 2',
			description:
				'Praesent in enim tincidunt, convallis ex et, viverra orci. Morbi semper diam a lacinia imperdiet. Vivamus congue ex ut diam luctus, et facilisis metus luctus.',
			imageUrl: 'https://source.unsplash.com/random/',
			id: 2
		},
		{
			slamId: 2,
			name: 'Slot name 1',
			description:
				'Praesent in enim tincidunt, convallis ex et, viverra orci. Morbi semper diam a lacinia imperdiet. Vivamus congue ex ut diam luctus, et facilisis metus luctus.',
			imageUrl: 'https://source.unsplash.com/random/',
			id: 3
		},
		{
			slamId: 2,
			name: 'Slot name 2',
			description:
				'Praesent in enim tincidunt, convallis ex et, viverra orci. Morbi semper diam a lacinia imperdiet. Vivamus congue ex ut diam luctus, et facilisis metus luctus.',
			imageUrl: 'https://source.unsplash.com/random/',
			id: 4
		},
		{
			slamId: 3,
			name: 'Slot name 1',
			description:
				'Praesent in enim tincidunt, convallis ex et, viverra orci. Morbi semper diam a lacinia imperdiet. Vivamus congue ex ut diam luctus, et facilisis metus luctus.',
			imageUrl: 'https://source.unsplash.com/random/',
			id: 5
		},
		{
			slamId: 1,
			name: 'Another slot',
			description:
				'Praesent in enim tincidunt, convallis ex et, viverra orci. Morbi semper diam a lacinia imperdiet. Vivamus congue ex ut diam luctus, et facilisis metus luctus.',
			imageUrl: 'https://source.unsplash.com/random/',
			id: 6
		}
	];

	static getSlot(id) {
		return this.slots.find(slot => {
			return slot.id == id;
		});
	}

	// get all slots from a given slam
	static getSlotsBySlamId(slamId) {
		return this.slots.filter(slot => {
			return slot.slamId == slamId;
		});
	}
}
