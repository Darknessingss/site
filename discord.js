async function copydiscord() {
        try {
            await navigator.clipboard.writeText('.darknessing');
            ds.style.display='block';
            setTimeout("ds.style.display='none'", 2000);
        }
        catch (err) {
            console.error('Ошибка: ', err);
        }
}
