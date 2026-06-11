import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-caribou-crossing',
  imports: [CommonModule],
  templateUrl: './caribou-crossing.component.html',
  styleUrl: './caribou-crossing.component.scss'
})
export class CaribouCrossingComponent {
  gameUrl: SafeResourceUrl;
  activated = false;

  @ViewChild('gameFrame') gameFrame!: ElementRef<HTMLIFrameElement>;

  constructor(sanitizer: DomSanitizer) {
    this.gameUrl = sanitizer.bypassSecurityTrustResourceUrl('/caribou-crossing-game/index.html');
  }

  activate() {
    this.activated = true;
    this.focusFrame();
    // Re-focus after Angular removes the overlay from DOM — that mutation
    // causes the browser to pull focus back to the parent page without this.
    setTimeout(() => this.focusFrame(), 0);
  }

  private focusFrame() {
    const frame = this.gameFrame.nativeElement;
    frame.focus();
    frame.contentWindow?.focus();
  }
}
