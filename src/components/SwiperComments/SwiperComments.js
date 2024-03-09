import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const SwiperComments = ({comments}) => {
    return (
        <Swiper modules={[Navigation]} slidesPerView={1} navigation>
            {comments.map((comment) => (
                <SwiperSlide key={comment.id}>
                    <div className='comment-area'>
                        <p className='comment'>{comment.comment}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperComments;