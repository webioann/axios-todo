const POST = {
    method: 'POST',
    body: JSON.stringify({
        id: 1,
        title: 'POST',
        checked: false,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}
const PUT = {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'POST',
        checked: false,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}
const PUTCH = {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'PUTCH'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}
const DELETE = {
    method: 'DELETE',
}
