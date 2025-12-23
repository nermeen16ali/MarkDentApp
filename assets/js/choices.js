document.querySelectorAll('.choices-select').forEach(el => {
    new Choices(el, {
        searchEnabled: true,
        itemSelectText: '',
        shouldSort: false,
        placeholder: true,
        placeholderValue: el.dataset.placeholder
    });
});