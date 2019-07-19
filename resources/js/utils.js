import dayjs from 'dayjs';
export * from './helper/pinyin';

export const TimeStrMap = getTimeStrMap();

export function getTimeStrMap() {
    let minMap = ['00', '15', '30', '45'];
    let timeStrMap = [];
    for (let i = 0; i < 96; i++) {
        let hour = Math.floor(i / 4);
        if (hour < 10) {
            hour = '0' + hour;
        }
        timeStrMap.push(hour + ':' + minMap[i % 4]);
    }
    return timeStrMap;
};

export function getTimeStr(i) {
    return TimeStrMap[i];
};

export function getTimeRange(start, end, step = 1) {
    let ret = [];
    for (let i = start; i < end; i += step) {
        ret.push(TimeStrMap[i]);
    }
    return ret;
}

export function range(start, end, step = 1) {
    let ret = [];
    for (let i = start; i < end; i += step) {
        ret.push(i);
    }
    return ret;
}

export function getMonthStartEnd(date, format = 'YYYY-MM-DD') {
    const d = dayjs(date)
    return {
        start: d.startOf('month').format(format),
        end: d.endOf('month').format(format),
    }
}

export function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data.split(',')[1]);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, {
        type: contentType
    });
    return blob;
}

export function compressImg(source_img_obj, quality) {
    var mime_type = "image/jpeg";
    var cvs = document.createElement('canvas');
    cvs.width = source_img_obj.naturalWidth;
    cvs.height = source_img_obj.naturalHeight;
    cvs.getContext("2d").drawImage(source_img_obj, 0, 0);
    var newImageData = cvs.toDataURL(mime_type, quality / 100);
    return b64toBlob(newImageData, "image/jpeg");
}
