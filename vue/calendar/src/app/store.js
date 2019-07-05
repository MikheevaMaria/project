import { seedData } from './seed';

export const store = {
    state: {
        days: seedData
    },

    getActiveDay() {
        return this.state.days.find(day => day.active);
    },

    setActiveDay(dayId) {
        this.state.days.forEach(day => {
            if (day.id === dayId) {
                day.active = true;
            } else {
                day.active = false;
            }
        });
    },

    submitEvent(eventDetails) {
        const activeDay = tis.getActiveDay();

        activeDay.events.push({ datails, edit: false });
    },

    editEvent(dayId, eventIndex) {
        const day = this.state.days.find( day => day.id === dayId);
        const event = day.events[eventIndex];
        event.edit = true;
    },

    updateEvent(dayId, eventIndex, newEventDetails) {
        const day = this.state.days.find(day => day.id === dayId);
        const event = day.events[eventIndex];
        event.details = newEventDetails;
        event.edit = false;
    },

    deleteEvent(dayId, eventIndex) {
        const day = this.state.days.find(day => day.id === dayId);
        day.events.splice(eventIndex, 1);
    }
};