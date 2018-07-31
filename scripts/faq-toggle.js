for (let i = 0; i < 7; i++) {
    $(`.list__question_${i}`).on(`click`, function(e) {
        $(`.list__text_${i}`).toggle(500);
    });    
};
