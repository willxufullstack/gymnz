import dayjs from 'dayjs';
import i18N from './lang';

const L = i18N('Utils')
export * from './helper/pinyin';

export const TimeStrMap = getTimeStrMap();

export function getTimeStrMap() {
    let minMap = ['00', '15', '30', '45'];
    let timeStrMap = [];
    for (let i = 0; i <= 96; i++) {
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

export function getMonthLabel(i) {
    return ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'][i]
}

export function sum(items, prop){
    return items.reduce( function(a, b){
        return a + b[prop];
    }, 0);
}

export function getRange(data, delta=0.3) {
    if(!data || !data.length) {
        return [0, 0]
    }
    const max = Math.max(...data)
    const min = Math.min(...data)

    const deltaValue = Math.floor(max - min) * delta
    return [ min - deltaValue,  max + deltaValue]

}

export function getPointEdge(pointData, delta = 0.3){
    if(!pointData || !pointData.length) {
        return {
            xRange: [0, 0],
            yRange: [0, 0]
        }
    }
    const allX = pointData.map((p) => p.x)
    const allY = pointData.map((p) => p.y)
    let minX = Math.min(...allX)
    let maxX = Math.max(...allX)
    let minY = Math.min(...allY)
    let maxY = Math.max(...allY)
    const deltaX = Math.floor(maxX - minX) * delta
    const deltaY = Math.floor(maxY - minY) * delta
    return {
        xRange: [ minX - deltaX,  maxX + deltaX],
        yRange: [ minY - deltaY,  maxY + deltaY]
    }
}

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
export function getYearStartEnd(date, format = 'YYYY-MM-DD') {
    const d = dayjs(date)
    return {
        start: d.startOf('year').format(format),
        end: d.endOf('year').format(format),
    }
}
export function getDayStartEnd(date, format = 'YYYY-MM-DD HH:mm:ss') {
    const d = dayjs(date)
    return {
        start: d.startOf('day').format(format),
        end: d.endOf('day').format(format),
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

export function imgThumbnail(url, width, height) {
    return `${url}?imageView2/1/w/${width}/h/${height}/format/jpg`;
}

export function wrapImgToGalleryItem(url, caption, width, height) {
    if (!width) {
        width = 200;
    }
    if (!height) {
        height = width;
    }
    return {
        src: url,
        thumbnail: imgThumbnail(url, width, height),
        thumbnailWidth: width,
        thumbnailHeight: height,
        isSelected: false,
        thumbnailCaption: caption,
    }
}

export function arrayToOptions(arr) {
    return arr.map(item => {
        return { value: item, label: item };
    });
}

export function getOrderStatus(order) {
    const today = new Date()
    const expiry = new Date(order.expiry)
    if(order.booked_amount === 0) {
        return '- -'
    }
    if(today > expiry){
        return L.expired;
    }
    switch (order.status) {
        case 1:
            return L.normal;
        case 2:
            return L.refunded;
        default:
            return L.unknown;
    };
}

export function getOrderExpiry(order) {
    if(order.booked_amount === 0) {
        return '- -'
    }
    return order.expiry
}
