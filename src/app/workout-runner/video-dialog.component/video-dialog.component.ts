/**
 * Created by "s.t.o.k.a.t.o" on 16.02.2017.
 */

import {BSModalContext} from "angular2-modal/plugins/bootstrap";
import {Component, OnInit} from "@angular/core";
import {ModalComponent, DialogRef} from "angular2-modal";
import {SafeResourceUrl, DomSanitizer} from "@angular/platform-browser";

const template = require('./video-dialog.component.html');

export class VideoDialogContext extends BSModalContext {
    constructor(public videoId: string) {
        super();
        this.size = "sm";
    }
}

@Component({
    selector: 'video-dialog',
    template: template
})
export class VideoDialogComponent implements ModalComponent<VideoDialogContext>, OnInit {
    context: VideoDialogContext;
    videoId: SafeResourceUrl;
    private youtubeUrlPrefix = '//www.youtube.com/embed/';

    constructor(
        public dialog: DialogRef<VideoDialogContext>,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit() {
        this.videoId = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix + this.dialog.context.videoId);
    }

    ok() {
        this.dialog.close();
    }
}