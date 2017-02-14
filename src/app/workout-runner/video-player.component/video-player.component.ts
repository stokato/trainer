/**
 * Created by "s.t.o.k.a.t.o" on 14.02.2017.
 */

import {Component, OnChanges, Input} from "@angular/core";
import {SafeResourceUrl, DomSanitizer} from "@angular/platform-browser";

const template = require('./video-player.component.html');

@Component({
    selector: 'video-player',
    template: template
})
export class VideoPlayerComponent implements OnChanges {
    private youtubeUrlPrefix = '//www.youtube.com/embed/';

    @Input() videos: Array<string>;

    safeVideoUrls: Array<SafeResourceUrl>;

    constructor(private sanitizer: DomSanitizer) {

    }

    ngOnChanges() {

        this.safeVideoUrls = this.videos? this.videos.map(
            v => this.sanitizer.bypassSecurityTrustResourceUrl(
            this.youtubeUrlPrefix + v
            )) : this.videos;

        console.log(this.safeVideoUrls);
    }
}