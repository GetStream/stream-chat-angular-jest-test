import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { By } from '@angular/platform-browser';
import { ChannelListComponent, StreamChatModule } from 'stream-chat-angular';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, TranslateModule.forRoot()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should init chat', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const streamChannelList = fixture.debugElement.query(By.directive(ChannelListComponent))
    expect(streamChannelList).not.toBeNull();
    expect(streamChannelList).toBeDefined();
  });
});
