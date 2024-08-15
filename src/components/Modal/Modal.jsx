import React from 'react';
import YouTubePlayer from './YoutubePlayer';
import './modal.scss';

const Modal = ({ isOpen, onClose, videoKey }) => {
    if (!isOpen) return null;

    return (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <i onClick={onClose} className="bi bi-x modal-close"></i>
                        {videoKey ? (
                            <YouTubePlayer videoKey={videoKey}/>
                        ) : (
                            <div className='no-trailer'>
                                <h4>No trailer available. Try another movie</h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
