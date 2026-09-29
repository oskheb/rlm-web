function MessageBox({ input, direction }) {
    const isLeft = direction === 'left';

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                padding: '0 16px', // 16px buffer from left & right container edges
            }}
        >
            <div
                className="MessageBoxDiv"
                style={{
                    maxWidth: '70%',
                }}
            >
                <p>{input}</p>
            </div>
        </div>
    );
}

export default MessageBox