import React from 'react'
import TopicsSection from './TopicsSection'
import MessageSection from './MessageSection'

const RightSection = ({ tags }) => {
    return (
        <div className="hidden md:block mt-8 p-3 overflow-scroll hide-scrollbar w-3/12">
            <div className="flex flex-col gap-4">
                {/* Topics */}
                {
                    tags &&
                    <TopicsSection tags={tags} />
                }

                {/* Messages  */}
                <MessageSection />

            </div>
        </div>
    )
}

export default RightSection