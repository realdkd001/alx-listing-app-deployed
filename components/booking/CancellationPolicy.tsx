import React from 'react'

function CancellationPolicy() {
    return (
        <div
            className='mt-11 sm:mt-9 xl:mt-11'
        >
            <div className='text-base border-t border-b pb-6 sm:pb-8 xl:pb-10 border-[#E6E6E6] xl:text-2xl font-medium text-[#161117]'>
                <div className='mt-7 sm:mt-11 xl:mt-10 mb-6 xl:mb-8 text-xl font-bold'>
                    Cancellation policy
                </div>
                <span className='font-semibold'>
                    Free cancellation before Aug 23. {" "}
                </span>
                <span className='font-normal'>
                    Cancel before check-in on Aug 24 for a partial refund.
                </span>
            </div>

            <div className='pb-10 sm:pb-5 xl:pb-14 border-b border-[#E6E6E6]'>
                <div className='font-bold text-xl pt-7 pb-5 sm:py-7 xl:py-8'>
                    Ground rule
                </div>

                <div className='leading-7 xl:leading-10  sm:text-2xl font-normal  text-base'>
                    We ask every guest to remember a few simple things about what
                    makes a great guest.

                    <ul className='ml-4 list-disc'>
                        <li>
                            Follow the house rules
                        </li>
                        <li>
                            Treat your Host's home like your own
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CancellationPolicy