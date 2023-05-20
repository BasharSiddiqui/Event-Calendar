import { useState, useEffect } from 'react';
import { Modal, Button, Form, Card } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import momentPlugin from '@fullcalendar/moment';

const EventCalendar = () => {
    // State variables
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [events, setEvents] = useState([]); // Array of events

    // Fetch events on component mount
    useEffect(() => {
        fetchEvents();
    }, []);

    // Fetch events from the server
    const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/get_events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({}),
            });
            const data = await response.json();
            setEvents(data.events); // Update the events state with fetched events
        } catch (error) {
            console.error('Error occurred while fetching events:', error);
        }
    };

    // Show the modal
    const handleModalShow = () => setShowModal(true);

    // Close the modal
    const handleCloseModal = () => setShowModal(false);

    // Add a new event
    const handleEventAdd = (event) => {
        setEvents([...events, event]); // Add the new event to the events array
        handleCloseModal(); // Close the modal
    };

    // Handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Get form values
        const title = e.target.title.value;
        const date = e.target.date.value;
        const startTime = e.target.startTime.value;
        const endTime = e.target.endTime.value;

        // Create a new event object
        const newEvent = {
            title,
            start: `${date}T${startTime}`,
            end: `${date}T${endTime}`,
        };

        try {
            const response = await fetch('http://localhost:3000/api/add_event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEvent),
            });
            if (response.ok) {
                handleEventAdd(newEvent); // Add the new event to the calendar
            } else {
                console.error('Failed to add event');
            }
        } catch (error) {
            console.error('Error occurred while adding event:', error);
        }
    };

    return (
        <div className="d-flex pl-4 flex-column align-items-center justify-content-center">
            <h1 className="mt-3">Event Calendar</h1>

            <Card className="mt-3 p-3">
                <Button variant="primary" onClick={handleModalShow}>
                    Add Event
                </Button>
                <div className="mt-3">
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, momentPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay',
                        }}
                        events={events} // Set the events for the calendar
                        style={{ height: '100%' }}
                    />
                </div>
            </Card>

            {/* Modal for adding events */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" required />
                        </Form.Group>
                        <Form.Group controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" required />
                        </Form.Group>
                        <Form.Group controlId="startTime">
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control type="time" required />
                        </Form.Group>
                        <Form.Group controlId="endTime">
                            <Form.Label>End Time</Form.Label>
                            <Form.Control type="time" required />
                        </Form.Group>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Event
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default EventCalendar;
