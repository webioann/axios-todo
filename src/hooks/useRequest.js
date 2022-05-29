const useRequest = (url = '', options = null, massage = null) => {
    try {
        fetch(url, options);
    } 
    catch (error) {
        massage = error.message;
    } 
    finally {
        return massage;
    }
}
export default useRequest;