function getFormattedTimestamp(timestamp) {

    return timestamp.toLocaleString("en-IN", {
                                                year:   "numeric",
                                                month:  "short",
                                                day:    "numeric",
                                                hour:   "numeric",
                                                minute: "2-digit",
                                                hour12: true
                                            }
                                    );
}


export default getFormattedTimestamp;
