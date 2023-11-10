import React from 'react'

const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => {
    return (
        <div className="flex justify-center py-20 gap-4">
            <button
                onClick={onPrev}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                Prev
            </button>

            <button
                onClick={onNext}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
                Next
            </button>
        </div>
    )
}

export default Pagination
