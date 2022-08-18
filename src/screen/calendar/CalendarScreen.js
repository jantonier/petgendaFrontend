import { Box, Text, Button } from 'native-base';
import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react'

function CalendarScreen({ navigation, route }) {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <Box>
            <Box>
                <Button onPress={showDatepicker} title="Show date picker!" />
            </Box>
            <Box>
                <Button onPress={showTimepicker} title="Show time picker!" />
            </Box>
            <Text>selected: {date.toLocaleString()}</Text>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        </Box>
    );




    //   return (
    //     <Box style={{ flex: 1, backgroundColor: 'white' }}>
    //       <Box style={{ flex: 1, alignItems: 'center' }}>
    //         <Text>Calendar</Text>
    //       </Box>
    //       <Box>
    //         <DateTimePicker></DateTimePicker>
    //       </Box>
    //     </Box>
    //   );
}

export default CalendarScreen;
