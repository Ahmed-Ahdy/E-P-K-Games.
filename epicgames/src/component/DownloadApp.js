function DownloadApp() {
    return (
        <div className="p-3 mb-2 bg-dark text-white " style={{ height: 630 }}>
            <button class="btn btn-secondary mt-4" type="button" disabled>
                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status"> DOWNLOADING...</span>
            </button>
        </div>
    )
}
export default DownloadApp