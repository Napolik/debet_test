const w = [5, 6, 7, 8, 9];
const h = [1, 2, 8, 3, 4];

const count_width = (w, h) => {
    let bigger_width_count = 0;
    for (let i = 0; i < h.length; i++) {
        if (w[i] > h[i]) {
            bigger_width_count++;
        }
    }
    return 'Ширина більша: ' + bigger_width_count;
}

const count_height = (w, h) => {
    let smaller_width_count = 0;
    for (let i = 0; i < h.length; i++) {
        if (w[i] < h[i]) {
            smaller_width_count++;
        }
    }
    return 'Довжина більша: ' + smaller_width_count;
}

const longest_diagonal_num = (w, h) => {
    let result = [];
    for (i = 0; i < w.length; i++) {
        let diagonal = Math.sqrt(Math.pow(h[i], 2) + Math.pow(w[i], 2));
        result.push(diagonal);
    }
    return 'Найдовша діагональ: ' + result.sort()[0];
}


count_width(w,h);
count_height(w,h);
longest_diagonal_num(w, h);