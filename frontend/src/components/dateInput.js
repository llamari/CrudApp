import React, { useEffect, useState } from 'react';
import { View, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../styles/styles';

export function DateInput({ value, onChange }) {
    const [date, setDate] = useState(value ? new Date(value) : new Date());
    const [showPicker, setShowPicker] = useState(false);

    const handleChange = (_, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPicker(Platform.OS === 'ios');
        setDate(currentDate);
        if (onChange) {
            onChange(currentDate.toISOString()); // envia a data em string
        }
    };

    const showDatepicker = () => {
        setShowPicker(true);
    };

    useEffect(() => {
        if (value) {
            setDate(new Date(value));
        }
    }, [value]);

    return (
        <View>
            <TextInput
                placeholder="Select Date"
                value={date.toLocaleDateString()}
                onPressIn={showDatepicker}
                editable={false} // não permite digitar
                style={styles.input}
            />
            {showPicker && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={handleChange}
                />
            )}
        </View>
    );
}