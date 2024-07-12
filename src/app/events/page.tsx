'use client';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getEvents } from './handler';

const EventCard = ({ event }: { event: any }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {event.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {event.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Donasi</Button>
      <Button size="small">Volunteer</Button>
    </CardActions>
  </Card>
);

const EventsPage = () => {
  const [events, setEvents] = useState<any[]>();

  useEffect(() => {
    async function fetchData() {
      const data = await getEvents();
      setEvents(data);
    }

    fetchData();
  }, []);

  return (
    <Stack
      direction={{
        md: 'row',
        sm: 'column'
      }}
    >
      {events?.map((event, index) => (
        <EventCard key={index} event={event.attributes} />
      ))}
    </Stack>
  );
};

export default EventsPage;
