const handleAlert = (message, type = 'success', time = 3000) => {
    if (alert.timeoutId) {
        setAlert({ type: '', message: '', timeoutId: null });
        clearTimeout(alert.timeoutId);
        setTimeout(() => {
            newAlert(message, type, time);
        }, 50);
        return;
    }
    newAlert(message, type, time);
}

const newAlert = (message, type = 'success', time = 3000) => {
    setAlert({ type, message });

    const timeoutId = setTimeout(() => {
        setAlert({ type: '', message: '' });
    }, time);

    setAlert({ type, message, timeoutId });
}